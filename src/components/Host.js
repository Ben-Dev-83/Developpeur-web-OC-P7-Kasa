import HostStyle from '../styles/Host.module.scss'

function Host(props) {
    return (
        <div className={HostStyle.container}>
            <h3 className={HostStyle.name}>{props.name}</h3>
            <img src={props.picture} alt={props.name} className={HostStyle.img}/>
        </div>
    )
}

export default Host