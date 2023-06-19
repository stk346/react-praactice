import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "신태경",
        comment: "안녕하세요. 신태경입니다.",
    },
    {
        name: "이건희",
        comment: "리액트 너무 어려워요..",
    },
    {
        name: "신세희",
        comment: "오늘도 야근이군,,",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;