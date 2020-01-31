import React from 'react';

export default class FAQ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
    this.toggleFAQ = this.toggleFAQ.bind(this);
  }

  toggleFAQ() {
    this.setState({expanded: !this.state.expanded});
  }

  render () {
    return (
        <div className="FAQ">
            <button className="faqbutton" onClick={() => {this.toggleFAQ()}}>FAQ</button>
            <div className={this.state.expanded ? "faqexpanded" : "faqclosed"}>
              Q: Who worked on this right column?
              <br/>
              A: <a className="faqlink" href="https://github.com/Etsy-FEC/Checkout-Description/blob/master/README.md" target="_blank">Sager Williams</a>
            </div>
        </div>
    )
  }
}