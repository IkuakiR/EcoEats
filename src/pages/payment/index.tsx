import { useState } from 'react'
import Link from 'next/link'
import style from '@/styles/payment/index.module.scss'
import Image from "next/image";
import Button from '@/components/template/Button'

export default function Payment() {

    const [paymentMethod, setPaymentMethod] = useState("");

    const handlePaymentMethodChange = (method) => {
        setPaymentMethod(method);
    };

    return (
        <>
            <div className={style.body}>
                <div>
                    <img className={style.logo} src="/img/appLogo.png" alt="logo" />
                </div>

                <p className={style.letsGo}>早速注文を始めてみましょう。</p>
                <p className={style.plzChoice}>お支払い方法を選択してください。</p>

                <div className={style.paymentOptions}>
                    <div className={style.paymentOption} onClick={() => handlePaymentMethodChange('paypay')}>
                        <div className={`${style.indicator} ${paymentMethod === 'paypay' && style.selected}`} />
                        PayPayでお支払い
                    </div>
                    <div className={style.paymentOption} onClick={() => handlePaymentMethodChange('creditCard')}>
                        <div className={`${style.indicator} ${paymentMethod === 'creditCard' && style.selected}`} />
                        クレジットカードでお支払い
                    </div>
                    {paymentMethod === 'creditCard' && (
                        <div className={style.newCardButton}>
                            <p>新しいカードを登録</p>
                            {/* <Button text="新しいカードを登録" /> */}
                        </div>
                    )}
                    <div className={style.paymentOption} onClick={() => handlePaymentMethodChange('cash')}>
                        <div className={`${style.indicator} ${paymentMethod === 'cash' && style.selected}`} />
                        現金でお支払い
                    </div>
                </div>

                <div className={style.toNext}
                    onClick={() => location.href = '/payment'}>
                    <Button text='完了' />
                </div>
            </div>
        </>
    )
}