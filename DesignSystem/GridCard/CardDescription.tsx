import styled from 'styled-components'
import { Tag } from 'antd'
import { PhotoDescription, VideoDescription } from './GirdCard'
import { useState } from 'react'

const MarginDiv = styled.div`
	margin-bottom: 3px;
`

const Span = styled.span`
	color: #252525;
`

type DescriptionProps = {
	description: VideoDescription | PhotoDescription
}

export const CardDescription = ({ description }: DescriptionProps) => {
	if (description.type == 'video') {
		const joinPerson =
			description.joinPerson[0] +
			' 외 ' +
			(description.joinPerson.length - 1) +
			'인'
		return (
			<>
				<MarginDiv>
					<Span>참여자 : {joinPerson}</Span>
				</MarginDiv>
				<MarginDiv>
					<Span>소속 : {description.department}</Span>
				</MarginDiv>
				<MarginDiv>
					<Span>{description.time}</Span>
				</MarginDiv>
				<MarginDiv>
					{description.hashtag.map((item, index) => (
						<Tag color="geekblue" key={index}>
							#{item}
						</Tag>
					))}
				</MarginDiv>
			</>
		)
	} else if (description.type == 'photo') {
		return (
			<>
				<MarginDiv>
					<Span>참여자 : 사진</Span>
				</MarginDiv>
				<MarginDiv>
					<Span>소속 : 사진</Span>
				</MarginDiv>
				<MarginDiv>
					<Span>사진</Span>
				</MarginDiv>
				{/* <MarginDiv>
				{hashTagArray.map((item, index) => (
					<Tag color="geekblue" key={index}>
						#{item}
					</Tag>
				))}
			</MarginDiv> */}
			</>
		)
	}

	return <></>
}
