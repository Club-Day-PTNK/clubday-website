import React from 'react';
import memberStyles from "../../styles/about/Member.module.scss";
import Image from 'next/image';

const Member = ({avatar,name,classYear}) => {
    return (
        <div className={memberStyles.container}>
            <div className={memberStyles.imageWrapper}>
                <Image 
                src={avatar}
                alt="avatar"
                objectPosition="center"
                layout="fill"
                />
            </div>
            <h3 className={memberStyles.name}>{name}</h3>
            <div className={memberStyles.classYear}>{classYear}</div>
        </div>
    )
}

export default Member
