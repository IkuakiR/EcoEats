import { useState, useEffect } from 'react';
import Link from 'next/link'
import style from '@/styles/done/index.module.scss'
import Image from "next/image";
import Button from '@/components/template/Button'
import { useRouter } from 'next/router';


export default function Done() {

    const router = useRouter(); // 追加

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/month'); // 3秒後に/monthに遷移する
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className={style.body}>
                <div>
                    <img className={style.logo} src="/img/appLogo.png" alt="logo" />
                </div>

                <img className={style.checkMark} src="/img/check_mark.png" alt="checkMark" />
                <p className={style.done}>登録完了しました！</p>

                <div className={style.pageChange}>
                    <img className={style.excla} src="/img/exclamation.png" alt="exclamation" />
                    <p>自動的にページが切り替わります</p>
                </div>

                <p className={style.ifDont}>画面遷移しない場合は<br />「次へ」ボタンをクリックしてください。</p>

                <div className={style.toNext} 
                onClick={ () => location.href = '/month'}>
                    <Button text='次へ' />
                </div>
            </div>
        </>
    )
}