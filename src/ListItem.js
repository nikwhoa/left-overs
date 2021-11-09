import { Component } from "react";
import dataService from "./dataService";


class ListItem extends Component {
  
    

  render() {
       
        const items = this.props.listItems.map((item, index) => {
      
            return (
              <li key={`${item}_${index}`}>
                <div className="list-item sku">
                  {item.A}
                </div>
                <div className="list-item name">
                  {item.B}
                </div>
                <div className="list-item size">
                  {item.E}
                </div>
                <div className="list-item height">
                  {item.F}
                </div>
                <div className="list-item overs-meters">
                  {item.G}
                </div>
                <div className="list-item overs-quantity">
                  {item.H}
                </div>
                <div className="list-item price">
                  {item.I}
                </div>
              </li>
            )
          })

          
        return(
            <>
            {items}
            </>
        )
    }
}

export default ListItem