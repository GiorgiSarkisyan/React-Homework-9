import FaqParagraph from "../elements/faqParagraph"
import '../css/font.css'
import '../css/main-page.css'

function RightSide() {
    return(
        <div className="right-side">
            <div className="right-side-content">
                <div className="right-side-title">
                    <h2>
                        FAQ
                    </h2>
                </div>
                <div className="right-side-faq-content">
                    <FaqParagraph title="How many team members can I invite?" paragraph="As many as you want, it does not really matter. but don't be rude!"/>
                    <FaqParagraph title="What is the maximum file upload size?" paragraph="No more than 2GB. All files in your account must fit your allotted storage space."/>
                    <FaqParagraph title="How do I reset my password?" paragraph="Go to Settings -> Privacy -> Password Reset"/>
                    <FaqParagraph title="Can I cancel my subscription?" paragraph="Of course you can. Simply go to Account Details -> Subscriptions -> `Your Subscription`"/>
                </div>
            </div>
        </div>
    )
}

export default RightSide