import React, { Component } from 'react';
import mobiscroll from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import "./test.css";


mobiscroll.settings = {
  theme: 'ios'
};

export default class Test extends Component {
   constructor(props) {
      super(props);

      this.state = {
          view: 'month',
          myEvents: [] ,
          calView: {
              calendar: { type: 'month' },
              eventList: { type: 'month', scrollable: true }
          }
      };
      
      mobiscroll.util.getJson('https://trial.mobiscroll.com/events/', (events) => {
          this.setState({ myEvents: events});
      }, 'jsonp');
  }
  
  changeView = (event) => {
      var view;
      switch (event.target.value) {
      case 'month':
          view = {
              calendar: { type: 'month' },
              eventList: { type: 'month', scrollable: true }
          };
          break;
      case 'week':
          view = {
              calendar: { type: 'week' },
              eventList: { type: 'week', scrollable: true }
          };
          break;
  }
  
  this.setState({
      view: event.target.value,
      calView: view
    });
  }
  
  render () {
    const style = {
      height: '100%'
    };
    return (
      <div class="demo-switching-day-week-month-view">
        <div id="content" style={style}>
          <div className="md-switching-view-cont">
            <mobiscroll.Form>
                <mobiscroll.Segmented value="month" name="view" checked={this.state.view === 'month'} onChange={this.changeView}>
                    Month
                </mobiscroll.Segmented>
                <mobiscroll.Segmented value="week" name="view" checked={this.state.view === 'week'} onChange={this.changeView}>
                    Week
                </mobiscroll.Segmented>
            </mobiscroll.Form>
            <div className="md-switching-view-cal-cont">
              <mobiscroll.Eventcalendar
                  ref="calendar"
                  display="inline"
                  view={this.state.calView}
                  data={this.state.myEvents}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }    
}
