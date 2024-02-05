import style from '@/styles/components/template/button.module.scss'
type ButtonProps = {
    text: string,
}

export default function Button(props:ButtonProps) {
    return (
        <>
            <div className={style.button}>
                <button>{props.text}</button>
            </div>
        </>
    )
}