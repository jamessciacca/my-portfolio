import React from 'react';
import { act, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Timeline from './Timeline';

let observerCallback;
let disconnect;
let unobserve;
let motion;
const originalObserver = window.IntersectionObserver;
const originalMatchMedia = window.matchMedia;

beforeEach(() => {
    motion = { matches: false, addEventListener: jest.fn(), removeEventListener: jest.fn() };
    window.matchMedia = jest.fn(() => motion);
    disconnect = jest.fn();
    unobserve = jest.fn();
    window.IntersectionObserver = jest.fn((callback) => {
        observerCallback = callback;
        return { observe: jest.fn(), unobserve, disconnect };
    });
    jest.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue({ top: 1200, height: 300 });
});

afterEach(() => {
    jest.restoreAllMocks();
    window.IntersectionObserver = originalObserver;
    window.matchMedia = originalMatchMedia;
});

function renderStory() {
    return render(<MemoryRouter><Timeline /></MemoryRouter>);
}

test('reveals a milestone when it enters the viewport and releases the observer on unmount', () => {
    const { container, unmount } = renderStory();
    const track = container.querySelector('.story-track');
    const firstStep = container.querySelector('.story-step');
    expect(track).toHaveClass('story-animated');
    expect(firstStep).not.toHaveClass('is-revealed');
    act(() => observerCallback([{ target: firstStep, isIntersecting: true }]));
    expect(firstStep).toHaveClass('is-revealed');
    expect(unobserve).toHaveBeenCalledWith(firstStep);
    unmount();
    expect(disconnect).toHaveBeenCalled();
    expect(motion.removeEventListener).toHaveBeenCalledWith('change', expect.any(Function));
});

test('keeps the story visible when reduced motion is requested or observers are unavailable', () => {
    motion.matches = true;
    const { container, unmount } = renderStory();
    expect(container.querySelector('.story-track')).not.toHaveClass('story-animated');
    expect(window.IntersectionObserver).not.toHaveBeenCalled();
    unmount();
    motion.matches = false;
    delete window.IntersectionObserver;
    const fallback = renderStory();
    expect(fallback.container.querySelector('.story-track')).not.toHaveClass('story-animated');
});

test('provides a working story anchor and keeps the future certification distinct from completed events', () => {
    const { container } = renderStory();
    const anchor = screen.getByRole('link', { name: /follow my story/i });
    expect(container.querySelector(anchor.getAttribute('href'))).toHaveTextContent('Holmdel High School');
    expect(screen.getByText('Network+ · Expected November 2026')).toBeInTheDocument();
    expect(container.querySelector('.story-current')).toHaveTextContent('September 8, 2026');
    expect(container).not.toHaveTextContent('NJIT');
});
