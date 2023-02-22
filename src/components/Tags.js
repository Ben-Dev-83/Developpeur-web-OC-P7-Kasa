import TagStyle from'../styles/Tag.module.scss'

function Tags(props) {
    return (
        <div className={TagStyle.container}>
            {props.tags.map((tag, index) => (
                <div className={TagStyle.container__tags} key={index}>
                <p className={TagStyle.container__paragraphe}>
                    {tag}
                </p>
                </div>
            ))}
        </div>
    )
}

export default Tags