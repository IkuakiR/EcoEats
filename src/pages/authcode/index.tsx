import { useState, useEffect, useRef } from 'react';
import Link from 'next/link'
import style from '@/styles/authcode/index.module.scss'
import Image from "next/image";

export default function Authcode() {

    const [codes, setCodes] = useState(Array(6).fill(''));
    const codeInputs = Array(6).fill(0).map((_, index) => useRef(null));
    const [showImage, setShowImage] = useState(false);

    const handleChange = (e, index) => {
        const { value } = e.target;
        setCodes((prevCodes) => {
            const newCodes = [...prevCodes];
            newCodes[index] = value;
            return newCodes;
        });

        // 次の入力欄にフォーカスを移動します
        if (value !== '' && index < 5) {
            codeInputs[index + 1].current.focus();
        }
        if (value !== '' && index === 5) {
            window.location.href = '/done';
        }
    };

    const handleKeyDown = (e, index) => {
        // バックスペースが押された場合、前の入力欄にフォーカスを移動します
        if (e.key === 'Backspace' && index > 0 && codes[index] === '') {
            codeInputs[index - 1].current.focus();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const confirmationCode = codes.join('');
        // ここで確認コードの送信処理を行います
        console.log('確認コード:', confirmationCode);
        // 送信後の処理を追加する場合はここに記述します
    };

    useEffect(() => {
        // コンポーネントがマウントされてから5秒後に画像を表示
        const timer = setTimeout(() => setShowImage(true), 3500);
        // コンポーネントがアンマウントされたらタイマーをクリアする
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className={style.body}>
                <div>
                    <img className={style.logo} src="/img/appLogo.png" alt="logo" />
                </div>

                <div className={style.mainText}>
                    <p className={style.plzEnter}>認証コードを入力してください</p>
                    <p className={style.enter}>届いたSMSに記載されているコードを<br />入力してください。</p>
                </div>

                <div className={style.authcode}>
                    <form onSubmit={handleSubmit}>
                        {Array(6)
                            .fill(0)
                            .map((_, index) => (
                                <input
                                    className={style.inputField}
                                    key={index}
                                    ref={codeInputs[index]}
                                    type="text"
                                    maxLength={1}
                                    value={codes[index]}
                                    onChange={(e) => handleChange(e, index)}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                    required
                                />
                            ))}
                    </form>
                </div>

                <p className={style.again}>認証コードを再送信する</p>
                <p className={style.whyNot}>SMSが届かない場合</p>
            </div>
            {showImage && (
                <div className={style.slideInImage}>
                    {/* 画像の表示 */}
                    <img src="/img/popup.png" alt="sliding_image" />
                </div>
            )}
        </>
    )
}