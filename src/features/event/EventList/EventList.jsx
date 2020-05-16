import React, { Component } from 'react'
import EventListItem from './EventListItem'

 class EventList extends Component {
    render() {
    const {event} = this.props;
        return (
            <div>
                <h1>Event List</h1>
                {event.map((event=>
                    <EventListItem key={event.id} event = {event}/>  
                ))}
                
            </div>
        )
    }
}

export default EventList;