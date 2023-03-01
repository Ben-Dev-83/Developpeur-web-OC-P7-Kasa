import style from'../styles/Tag.module.scss'

function Tags(props) {
    return (
        <div className={style.container}>
            {props.tags.map((tag, index) => (
                <div className={style.container__tags} key={index}>
                <p className={style.container__paragraphe}>
                    {tag}
                </p>
                </div>
            ))}
        </div>
    )
}

export default Tags