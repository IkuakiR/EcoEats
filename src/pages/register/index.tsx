import { useState, useEffect } from 'react'
import Link from 'next/link'
import style from '@/styles/register/index.module.scss'
import Image from "next/image";
import Button from '@/components/template/Button'

export default function Register() {
    return (
        <>
            <div className={style.body}>
                <div className={style.regiTop}>
                    <img className={style.topImg} src="/img/vageTopImg.png" alt="topImg" />
                </div>

                <div className={style.howToRage}>
                    <button className={style.login}
                        onClick={() => {

                        }}>
                        ログイン
                    </button>
                    <button className={style.signUp}
                        onClick={() => {

                        }}>
                        新規登録
                    </button>
                </div>
                <div className={style.regiForm}>
                    <p className={style.mail}>メールアドレス</p>
                    <input type="text" />
                    <p className={style.mailAgn}>メールアドレス(確認のため再入力)</p>
                    <input type="text" />
                    <p className={style.pass}>パスワード</p>
                    <input type="password"
                        placeholder='半角英字、数字を組み合わせ8文字以上' />
                    <p className={style.phoneNum}>電話番号(ハイフンなし)</p>
                    <input type="text" />
                </div>

                {/* ここにボタンを配置 */}
                <div className={style.toNext} 
                onClick={ () => location.href = '/authcode'}>
                    <Button text='新規登録' />
                </div>
            </div>
        </>
    )
}