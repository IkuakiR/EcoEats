import Link from 'next/link'
import style from '@/styles/month/index.module.scss'
import Image from "next/image";
import Button from '@/components/template/Button'

export default function Done() {
    return (
        <>
            <div className={style.body}>
                <div>
                    <img className={style.logo} src="/img/appLogo.png" alt="logo" />
                </div>

                <p className={style.letsGo}>早速注文を始めてみましょう。</p>
                <p className={style.plzChoice}>一ヶ月に受け取る日と時間を選択してください。<br />
                    これは後からでも変更できます。</p>

                <img className={style.calender} src="/img/calender.png" alt="calender" />

                <div className={style.toNext} 
                onClick={ () => location.href = '/foodchoice'}>
                    <Button text='次へ' />
                </div>
            </div>
        </>
    )
}