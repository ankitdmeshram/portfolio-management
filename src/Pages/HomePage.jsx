import React from 'react'
import { Box, Typography } from '@mui/joy'
import { Card, FlexJustifyCenter, PageContainer } from '../CSS/Styled'
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
const HomePage = () => {

    const posts = [
        {
            date: "Apr 18, 2024",
            title: "CM Fixed Income: Existing Banking & PSU to Add a New Gilt Fund",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis totam tempora possimus recusandae. Voluptate, dolorum eos! quidem? In nisi tenetur non inventore quisquam velit alias blanditiis. Facere, commodi sapiente"
        },
        {
            date: "May 02, 2024",
            title: "Equity Outlook: Midcap Funds Expected to Outperform in FY25",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, nostrum? Quas excepturi nemo minus adipisci repellendus officiis dolorem ab saepe necessitatibus, reprehenderit amet laborum voluptatem."
        },
        {
            date: "May 15, 2024",
            title: "CM Balanced Advantage Fund Reports 12% Yearly Growth",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error inventore perferendis quos totam, perspiciatis libero cum! At repellat earum numquam quasi voluptas doloremque expedita molestiae!"
        },
        {
            date: "Jun 01, 2024",
            title: "Debt Market Update: RBI’s Policy Pushes Short-Term Yields Higher",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum vitae nemo totam mollitia. Eveniet illum fugiat deserunt facere perspiciatis. Reprehenderit sapiente ducimus distinctio alias rerum."
        },
        {
            date: "Jun 10, 2024",
            title: "New Fund Offer: CM Flexi Cap Fund Opens for Subscription",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni delectus ullam, ad porro eaque, repellendus quisquam, eveniet natus voluptatum laborum explicabo ipsa sed."
        },
        {
            date: "Jun 25, 2024",
            title: "Gold ETF Investments Surge Amid Global Market Uncertainty",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit consequatur quaerat quidem id quibusdam, amet debitis harum necessitatibus maxime blanditiis libero exercitationem accusantium!"
        },
        {
            date: "Jul 05, 2024",
            title: "CM Small Cap Fund Achieves Record AUM of ₹8,200 Crores",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta minima, consequuntur dolores recusandae alias facere aspernatur at libero perferendis pariatur velit repellat obcaecati!"
        },
        {
            date: "Jul 20, 2024",
            title: "RBI Retains Repo Rate: What It Means for Fixed Income Investors",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur earum necessitatibus pariatur sed quasi suscipit, exercitationem id doloremque mollitia cum distinctio adipisci!"
        },
        {
            date: "Aug 02, 2024",
            title: "CM AMC Launches Sustainable Equity Fund with ESG Focus",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sed pariatur asperiores tempora! Quam dolores, dolorum unde, repellat, architecto voluptatibus soluta inventore quisquam!"
        },
        {
            date: "Aug 15, 2024",
            title: "Hybrid Funds Gain Popularity Among Conservative Investors",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quidem ipsam molestias maiores unde error, mollitia consequuntur possimus cumque reiciendis in eos."
        }
    ]

    return (
        <>
            <PageContainer>
                <Typography level='h2' sx={{ p: 2, pl: 0 }}>Home</Typography>
                <FlexJustifyCenter>
                    <Card>
                        <FlexJustifyCenter>
                            <Typography sx={{ fontWeight: "600" }}>Get Started</Typography> <OpenInNewOutlinedIcon />
                        </FlexJustifyCenter>
                        <Typography sx={{ pt: 1, fontSize: "14px" }}>Read our getting started guide to get the most out of your capitalmind subscription.</Typography>
                    </Card>
                    <Card>
                        <FlexJustifyCenter>
                            <Typography sx={{ fontWeight: "600" }}>community</Typography> <OpenInNewOutlinedIcon />
                        </FlexJustifyCenter>
                        <Typography sx={{ pt: 1, fontSize: "14px" }}>Join the conversation on our exclusive community on Slack for capitalmind premium subscribers</Typography>
                    </Card>
                    <Card>
                        <FlexJustifyCenter>
                            <Typography sx={{ fontWeight: "600" }}>Visit website</Typography> <OpenInNewOutlinedIcon />
                        </FlexJustifyCenter>
                        <Typography sx={{ pt: 1, fontSize: "14px" }}>Keep up with our latest content on our website</Typography>
                    </Card>
                </FlexJustifyCenter>

                <Box sx={{ mt: 4, mb: 1, fontWeight: 600 }}>
                    <Typography>Latest Posts</Typography>
                </Box>

                <FlexJustifyCenter sx={{ flexWrap: "wrap" }}>
                    {
                        posts.map(post => <Box width={"45%"}>
                            <Typography sx={{ pt: 1, fontSize: "13px", color: "#73849A" }}>{post?.date}</Typography>
                            <Typography sx={{ pt: 1, fontWeight: 600 }}>{post?.title}</Typography>
                            <Typography sx={{ pt: 1, fontSize: "13px" }}>{post?.description}</Typography>
                            <Typography sx={{ pt: 1, fontSize: "14px", color: "green" }}>Read full post</Typography>
                        </Box>)
                    }
                </FlexJustifyCenter>

            </PageContainer>
        </>
    )
}

export default HomePage