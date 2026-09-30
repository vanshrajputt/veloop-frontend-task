import {
    BsFillGiftFill,
    BsPersonFill,
    BsArrowRight,
    BsCheck2,
    BsCopy, BsShare, BsLightningCharge, BsShieldCheck, BsInfinity
} from "react-icons/bs";
import styles from "../ReferEarnBanner/ReferEarnBanner.module.css"
import referCharacters from "../../assets/refer-characters.png"
import React, { useState } from 'react'

export default function ReferEarnBanner() {
    const [copied, setCopied] = useState(false);
    return (
        <>
            <section className={styles.banner}>
                <div className={styles.content}>

                    <div className={styles.badge}>
                        <BsPersonFill />
                        <span> Refer & Earn</span>
                    </div>

                    <h2>Refer Friends,
                        <span>Earn Rewards</span></h2>

                    <p>
                        Invite your friends to VELOOP Rewards and earn exciting rewards together.
                    </p>

                    {/*  buttons  */}

                    <div className={styles.actions} >
                        <button className={styles.cta}>
                            Invite Now
                            < BsArrowRight className={styles.arrow} />
                        </button>
                        <button className={styles.secondCta}>
                            <span><BsFillGiftFill className={styles.secondCtagift} /></span>
                            How It Works

                        </button>
                    </div>

                </div>

                <div className={styles.visual}>
                    {/* SPARKLE DESIGN */}
                    <div className={styles.sparkleOne}>
                        ✦
                    </div>
                    <div className={styles.sparkleTwo}>
                        ✦
                    </div>
                    <div className={styles.sparkleThree}>
                        ✧
                    </div>
                    <div className={styles.sparkleFour}>
                        ✦
                    </div>
                    {/* REFERALCARD */}
                    <div className={styles.referalCard}>
                        <span>Your Referral Code</span>
                        <strong>VELOOP123</strong>
                        <button
                            className={styles.copyBtn}
                            onClick={() => {
                                navigator.clipboard.writeText("VELOOP123");
                                setCopied(true);

                                setTimeout(() => {
                                    setCopied(false);
                                }, 2000);
                            }}
                        >
                            {copied ? <BsCheck2 /> : <BsCopy />}
                        </button>
                    </div>

                    {/* CHARACTER IMAGE */}

                    <img src={referCharacters} className={styles.characters} alt="Refer and Earn" />

                    <div className={styles.rewardText}>
                        <strong>REWARD</strong>
                        <span> + VEs</span>
                    </div>

                </div>

                {/* FEATURES */}
                <div className={styles.features} >
                    <div className={styles.feature}>
                        <BsShare />
                        <strong>Easy to Share</strong>
                        <span>Share your link or code in just one click</span>
                    </div>
                    <div className={styles.feature}>
                        <BsLightningCharge />
                        <strong>Instant Rewards</strong>
                        <span>Track eligible referral rewards</span>
                    </div>
                    <div className={styles.feature}>
                        <BsShieldCheck />
                        <strong>100% Secure</strong>
                        <span>Secure referrals and real rewards tracking</span>
                    </div>
                    <div className={styles.feature}>
                        <BsInfinity />
                        <strong>Unlimited Earning</strong>
                        <span>Keep inviting and unlock eligible rewards</span>
                    </div>
                </div>
            </section>
        </>
    )
}