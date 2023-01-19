import React from 'react';
import './AccordionItem.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

class AccordionItem extends React.Component  {

    constructor(props) {
        super(props);
        
        this.state = {
          active: false, 
          
        }
    
      }

    handleTrigger = (e) => {
        this.setState(prevState => ({
            active: !prevState.active
        }))


    }

    render () {
        return (
            <div>
                <button onClick={this.handleTrigger} className={this.state.active ? 'trigger trigger_active' : 'trigger'}>
                {this.props.breed} <FontAwesomeIcon icon={this.state.active ? faMinus : faPlus}></FontAwesomeIcon>
                </button>
                 <div className={this.state.active ? 'answer answer_active' : 'answer'}>
                    <p>
                    {this.props.description}
                    </p>
                </div>
            </div>
        );
    }
    
};

export default AccordionItem;