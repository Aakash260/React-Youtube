import React from 'react'
const CommentData = [
    {
        name: "Aakash Nirwan",
        text: "👨‍💻Here we have nested comments",
        replies: []
    },
    {
        name: "Aakash Nirwan",
        text: "Lorem ipsum dolor sit amet, consectetur",
        replies: [
            {
            name: "Aakash Nirwan",
            text: "Lorem ipsum dolor sit amet, consectetur",
            replies: [  {
                name: "Aakash Nirwan",
                text: "Lorem ipsum dolor sit amet, consectetur",
                replies: []
            }]
        }
    ]
    },
    {
        name: "Aakash Nirwan",
        text: "Lorem ipsum dolor sit amet, consectetur",
        replies: [
            {
                name: "Aakash Nirwan",
                text: "Lorem ipsum dolor sit amet, consectetur",
                replies: []
            },
            {
                name: "Aakash Nirwan",
                text: "Lorem ipsum dolor sit amet, consectetur",
                replies: [{
                    name: "Aakash Nirwan",
                    text: "Lorem ipsum dolor sit amet, consectetur",
                    replies: []
                },
                {
                    name: "Aakash Nirwan",
                    text: "Lorem ipsum dolor sit amet, consectetur",
                    replies: []
                },
                {
                    name: "Aakash Nirwan",
                    text: "Lorem ipsum dolor sit amet, consectetur",
                    replies: []
                }
            ]
            }
        ]
    },
    {
        name: "Aakash Nirwan",
        text: "Lorem ipsum dolor sit amet, consectetur",
        replies: []
    },
    {
        name: "Aakash Nirwan",
        text: "Lorem ipsum dolor sit amet, consectetur",
        replies: [{
            name: "Aakash Nirwan",
            text: "Lorem ipsum dolor sit amet, consectetur",
            replies: []
        }]
    }
]

const Comment = ({ data }) => {

    const { name, text, replies } = data;
    return <div className='bg-gray-300 m-2'>

        <div className='ml-2 flex gap-2 border-2 '>
            <img
                className='rounded-lg '
                id="img"
                alt="Avatar"
                height="32"
                width="32"
                src="https://yt3.ggpht.com/yti/AOXPAcWM118l0cvGE9bSrTzu6hZzwztofGK7dp_nVtuQfhs=s88-c-k-c0x00ffffff-no-rj"
            />
            <div className=''>
                <p className='font-mono'>{name}</p>
                <p>{text}</p>
            </div>
        </div>
    </div>
}

const CommentList = ({ data }) => {

    return (data.map((item, i) => {
        return <div>
            <Comment key={i} data={item} />
            <div className=' pl-4 ml-12 border-l-4 border-black my-4'>
                <CommentList data={item.replies}/>
            </div>
        </div>
    })
    )
}
const CommentContainer = () => {
    return (<div className=' w-[78vw]'>
        <CommentList data={CommentData} />
        
    </div>
    )
}

export default CommentContainer