import React from 'react';
import styles from './styles';
import qrcode_bg from '../../assets/images/qrcode.png';

const QRcode = ({qrcode_url, foot_notice}) => <div className={styles['code-container']}>
    <p className={styles['title']}>二维码</p>
    <p className={styles['description']}>{foot_notice}</p>           
    <div className={styles['qr-code']}>
        <img src={qrcode_bg} className={styles['transparent-bg']}/>
        <img src={qrcode_bg} className={styles['non-transparent-bg']}/>
        <img src={qrcode_url} className={styles['code']}/>
    </div>
</div>;

export default QRcode;