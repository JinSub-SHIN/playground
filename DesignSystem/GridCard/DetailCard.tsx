import styled from 'styled-components'
import { ReactNode } from 'react'
import { Card, Col, Row } from 'antd'
import { CardDescription } from './CardDescription'
import { VideoDescription } from './GirdCard'
import { CardTitle } from './CardTitle'

const { Meta } = Card

const StyledCard = styled(Card)`
	border-radius: 0px;
	height: 100%;
`

const Video = styled.video`
	height: 550px;
	object-fit: initial;
`

export const DetailCard = (props: { children: ReactNode }) => {
	const description: VideoDescription = {
		type: 'video',
		joinPerson: ['김영준', '곽선영', '신진섭'],
		department: '와트',
		time: '2022-05-18 17:02:11 (30초)',
		hashtag: ['와트', '영상통화'],
		children: (
			<Video>
				<source
					src="http://www.tcpschool.com/lectures/sample_video_mp4.mp4"
					type="video/mp4"
				/>
			</Video>
		),
	}

	return (
		<>
			<StyledCard cover={props.children}>
				<Meta
					title={<CardTitle title="안녕하세요" buttonType="video" />}
					description={<CardDescription description={description} />}
				/>
			</StyledCard>
		</>
	)
}
