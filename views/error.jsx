// Error page 
const React = require('react');
const Default = require('./default');
const Index = () => {
    return(
        <Default>
            {/* Error page container */}
            <div class="err-container">
                {/* Error message */}
                <div class="err-msg">
                    <h3>Oops something went wrong, feel free to redirect back to the home page</h3>
                    {/* Error page link */}
                    <a href="/">Go Back</a>
                </div>
            </div>
        </Default>
    )
}
module.exports = Index;