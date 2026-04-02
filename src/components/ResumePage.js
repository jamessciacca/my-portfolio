import React from "react";
import resumePdf from "../pdf/JamesSciacca_Resume.pdf";

function ResumePage() {
    return (
        <section id="resumePage" className="px-6 py-10 md:px-10">
            <div className="resume-shell mx-auto max-w-screen-xl">
                <div className="resume-heading">
                    <p className="resume-kicker">Resume</p>
                    <h1 className="resume-title">James Sciacca's Resume</h1>
                    <p className="resume-intro">
                        View my latest resume directly on the site or download a copy.
                    </p>
                </div>

                <div className="resume-actions">
                    <a
                        className="resume-download"
                        href={resumePdf}
                        download="JamesSciacca_Resume.pdf"
                    >
                        Download PDF
                    </a>
                    <a
                        className="resume-open"
                        href={resumePdf}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Open In New Tab
                    </a>
                </div>

                <div className="resume-viewer-wrap">
                    <object
                        className="resume-viewer"
                        data={resumePdf}
                        type="application/pdf"
                    >
                        <p className="resume-fallback">
                            PDF preview is unavailable on this browser.{" "}
                            <a href={resumePdf} target="_blank" rel="noreferrer">
                                Open resume here
                            </a>
                            .
                        </p>
                    </object>
                </div>
            </div>
        </section>
    );
}

export default ResumePage;
