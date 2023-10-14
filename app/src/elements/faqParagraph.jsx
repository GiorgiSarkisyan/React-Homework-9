import React, { useState } from 'react';
import arrow from '../img/arrow.svg'

function FaqParagraph({ title, paragraph }) {
    const [showParagraph, setShowParagraph] = useState(false);

    return (
        <div className="faq-paragraph">
            <div className="faq-paragraph-flex">
                <div className="paragraph-box">
                    <p onClick={() => setShowParagraph(!showParagraph)} className={showParagraph ? 'black' : 'normal'}>
                        {title}
                    </p>
                </div>
                <div className="paragraph-button">
                    {showParagraph ?(
                    <img src={arrow} alt="arrow" className="reversed"/>
                    ) : 
                    <img src={arrow} alt="arrow"/>}
                </div>
            </div>
            {showParagraph && (
            <div className="paragraph">
                <p>{paragraph}</p>
            </div>
            )}
        </div>
    );
}

export default FaqParagraph;
