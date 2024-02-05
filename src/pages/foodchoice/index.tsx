import { useState } from 'react'
import Link from 'next/link'
import style from '@/styles/foodchoice/index.module.scss'
import Image from "next/image";
import Button from '@/components/template/Button'

export default function Foodchoice() {
    return (
        <>
            <div className={style.body}>
                <div>
                    <img className={style.logo} src="/img/appLogo.png" alt="logo" />
                </div>

                <p className={style.letsGo}>早速注文を始めてみましょう。</p>
                <p className={style.plzChoice}>メニューは3種類から選択できます。<br />
                    これは後からでも変更できます。</p>

                <div className={style.choiceImg}>
                    <div className={style.foods}>
                        <img className={style.foodsImg} src="/img/vegetable.jpg" alt="vegetable" />
                        <p>お任せ弁当<br />¥210/食</p>
                    </div>
                    <div className={style.foods}>
                        <img className={style.foodsImg} src="/img/fish.jpg" alt="fish" />
                        <p>魚弁当<br />¥300/食</p>
                    </div>
                    <div className={style.foods}>
                        <img className={style.foodsImg} src="/img/meat.jpg" alt="meat" />
                        <p className={style.meat}>肉弁当<br />¥300/食</p>
                    </div>
                </div>

                <div className={style.toNext}
                    onClick={() => location.href = '/payment'}>
                    <Button text='次へ' />
                </div>
            </div>
        </>
    )
}