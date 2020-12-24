var templates={};

templates.generatePayload= (docData, purposeId)=>{
    var [main, sub]= purposeId.split('_')
    var titles= {
        appointment: {
            registered: `initiated procedure for scheduling appointment with Dr. ${docData.doctorName}`,
            confirmed: `appointment confirmed with Dr. ${docData.doctorName} that was scheduled for ${docData.date} at ${docData.time}`,
            accepted: `Dr. ${docData.doctorName} accepted your appointment request that was scheduled for ${docData.date} at ${docData.time}`,
            declined: `Dr. ${docData.doctorName} declined your appointment request that was scheduled for ${docData.date} at ${docData.time}`
        },
        order: {
            placed: "order paced"
        },
        broadcast: {
            all: `${docData.title}`,
            topic: `${docData.title}`
        },
        appointmentReverse: {
            registered: `you have an appointment request`,
            cancelled: `${docData.patientName} cancelled the request that was scheduled for ${docData.date} at ${docData.time}`
        },     
    }

    var bodies= {
        appointment: {
            registered: `initiated procedure for scheduling appointment with Dr. ${docData.doctorName}`,
            confirmed: `appointment confirmed with Dr. ${docData.doctorName} that was scheduled for ${docData.date} at ${docData.time}`,
            accepted: `Dr. ${docData.doctorName} accepted your appointment request that was scheduled for ${docData.date} at ${docData.time}`,
            declined: `Dr. ${docData.doctorName} declined your appointment request that was scheduled for ${docData.date} at ${docData.time}`
        },
        order: {
            placed: "order paced"
        },
        broadcast: {
            all: `${docData.description}`,
            topic: `${docData.description}`
        },
        appointmentReverse: {
            registered: `You have an appointment request from ${docData.patientName}`,
            cancelled: `${docData.patientName} cancelled the request that was scheduled for ${docData.date} at ${docData.time}`
        }        
    }
    var screen= {
        appointment: "appointment",
        appointmentReverse: "appointment",
        order: "order"
    }

    var payload= {
        notification:{
            title: titles[main][sub],
            body: bodies[main][sub]
        },
        data: {
            title: titles[main][sub],
            body: bodies[main][sub],
            click_action: "FLUTTER_NOTIFICATION_CLICK",
            id: "1",
            status: "done",
            screen: screen[main]
        }
    }
    return payload
}

module.exports= templates