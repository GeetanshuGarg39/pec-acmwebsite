/* eslint-disable @next/next/no-img-element */
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import PageLayout from "../../components/layout/PageLayout";
import styles from "../../styles/pages/branch.module.scss";
import Link from "next/link";
import { BRANCHES } from '../../constants/branch';

const HtmlTooltip = styled(({ className, color, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} arrow />
))(({ color }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: 'transparent',
        maxWidth: '250px',
    },
    [`& .${tooltipClasses.arrow}`]: {
        color
    }
}));

export default function Branches() {
    const logoSize = 180;
    const FACTOR = 1.44688645;
    const middleLogo = FACTOR * logoSize;
    const aboutBranches = `PEC ACM stands tall with its 6 passionate branches, each a sanctuary of the college's finest minds. These divisions were made to channel the limitless potential of each subgroup's work, ensuring focused and impactful pursuits. Diverse events and opportunities unite members, fostering growth, excellence, and camaraderie within this thriving community of aspiring innovators.`;

    return (
        <PageLayout title={"Branches | ACM at PEC"} heading={"Branches"}>

            <div className={styles.aboutBranches}>{aboutBranches}</div>

            <div className={styles.wrapper}>
                <div className={styles.grid1}>
                    <div></div>

                    <HtmlTooltip
                        title={getSubgroupData("cp")}
                        placement="left-start"
                        color={getSubgroupColor('cp')}
                    >
                        <div>
                            <Link href='branches/cp'>
                                <img src="/assets/logos/cpBorder.png" alt="cp logo" height={logoSize} width={logoSize} />
                            </Link>
                        </div>
                    </HtmlTooltip>

                    <div className={styles.emptySpace}></div>

                    <HtmlTooltip
                        title={getSubgroupData("ai")}
                        placement="right-start"
                        color={getSubgroupColor("ai")}
                    >
                        <div>
                            <Link href='branches/ai'>
                                <img src="/assets/logos/aiBorder.png" alt="ai logo" height={logoSize} width={logoSize} />
                            </Link>
                        </div>
                    </HtmlTooltip>

                    <div></div>
                </div>

                <div className={styles.grid2}>

                    <HtmlTooltip
                        title={getSubgroupData("socials")}
                        placement="left-start"
                        color={getSubgroupColor("socials")}
                    >
                        <div>
                            <Link href='/branches/socials'>
                                <img src="/assets/logos/socialsBorder.png" alt="socials logo" height={logoSize} width={logoSize} />
                            </Link>
                        </div>
                    </HtmlTooltip>
                    <div className={styles.center}>
                        <Link href='/'>
                            <img src="/assets/logos/acmBorder.png" alt="acm logo" height={middleLogo} width={middleLogo} />
                        </Link>
                    </div>

                    <HtmlTooltip
                        title={getSubgroupData("cyber")}
                        placement="right-start"
                        color={getSubgroupColor("cyber")}
                    >
                        <div>
                            <Link href='branches/cyber'>

                                <img src="/assets/logos/cyberBorder.png" alt="cyber logo" height={logoSize} width={logoSize} />
                            </Link>
                        </div>
                    </HtmlTooltip>
                    <div></div>
                </div>

                <div className={styles.grid1}>
                    <div></div>

                    <HtmlTooltip
                        title={getSubgroupData("wit")}
                        placement="left-start"
                        color={getSubgroupColor("wit")}
                    >
                        <div>
                            <Link href='branches/wit'>
                                <img src="/assets/logos/witBorder.png" alt="wit logo" height={logoSize} width={logoSize} />
                            </Link>
                        </div>
                    </HtmlTooltip>
                    <div className={styles.emptySpace}></div>

                    <HtmlTooltip
                        title={getSubgroupData("development")}
                        placement="right-start"
                        color={getSubgroupColor("development")}
                    >
                        <div>
                            <Link href='branches/development'>

                                <img src="/assets/logos/devBorder.png" alt="dev logo" height={logoSize} width={logoSize} />
                            </Link>
                        </div>
                    </HtmlTooltip>
                    <div></div>
                </div>
            </div>
        </PageLayout>
    )
}

const getSubgroupData = (branchName: string) => {
    const branch = BRANCHES[branchName as keyof typeof BRANCHES];

    const subgroupColor = branch.color;
    const content = branch.oneLiner;

    const style = {
        border: `4px solid ${subgroupColor}`,
        padding: '0px 10px 20px 10px',
        color: subgroupColor,
        fontSize: '14px',
        borderRadius: '10px',
    }

    return <div style={style}>
        <h2 style={{ fontWeight: 600, lineHeight: 2 }}>
            <u>acm::{branch.alias}</u>
        </h2>

        <p style={{ fontSize: '14px', wordBreak: 'break-word' }}>{content}</p>
    </div>
}

const getSubgroupColor = (branchName: string) => {
    const branch = BRANCHES[branchName as keyof typeof BRANCHES];
    return branch.color;
}