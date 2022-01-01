import React from "react";
// @ts-ignore
import ChatMsg from '@mui-treasury/components/chatMsg/ChatMsg';

export default function MessageConversation(props:any) {
    return (
        <div>
            <ChatMsg
                avatar={''}
                messages={[
                    'Hi, how are you?',
                      ]}
            />
            <ChatMsg
                side={'right'}
                messages={[
                    "Im doing good",
                    "How are you?",

                ]}
            />
            <ChatMsg avatar={''} messages={['Great']} />
        </div>
        )

}