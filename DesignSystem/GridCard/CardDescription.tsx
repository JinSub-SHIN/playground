import styled, { css } from 'styled-components'
import { Tag } from 'antd'
import {
	DirectCameraDescription,
	DirectCameraDescriptionStoreOnly,
	MeMoDescription,
	MeMoDescriptionStoreOnly,
	PhotoDescription,
	PhotoDescriptionStoreOnly,
	VideoDescription,
	VideoDescriptionStoreOnly,
} from './GirdCard'

const MarginDiv = styled.div`
	margin-bottom: 3px;
`

const Span = styled.span`
	color: #252525;
`

type DescriptionProps = {
	description?:
		| VideoDescription
		| PhotoDescription
		| MeMoDescription
		| DirectCameraDescription
	detail?:
		| VideoDescriptionStoreOnly
		| PhotoDescriptionStoreOnly
		| MeMoDescriptionStoreOnly
		| DirectCameraDescriptionStoreOnly
}

export const CardDescription = ({ description, detail }: DescriptionProps) => {
	if (description !== undefined) {
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
		} else if (description.type == 'memo') {
			return (
				<>
					<MarginDiv>
						<Span>작성자 : {description.writer}</Span>
					</MarginDiv>
					<MarginDiv>
						<Span>내용 : {description.content}</Span>
					</MarginDiv>
					<MarginDiv>
						<Span>{description.time}</Span>
					</MarginDiv>
				</>
			)
		} else if (description.type == 'direct') {
			return (
				<>
					<MarginDiv>
						<Span>소속 : {description.department}</Span>
					</MarginDiv>
					<MarginDiv>
						<Span>작업지휘자 : {description.conductor}</Span>
					</MarginDiv>
					<MarginDiv>
						<Span>작업기간 : {description.workTime}</Span>
					</MarginDiv>
				</>
			)
		}
	}

	if (detail !== undefined) {
		if (detail.type == 'video') {
			const joinPerson =
				detail.joinPerson[0] + ' 외 ' + (detail.joinPerson.length - 1) + '인'
			return (
				<>
					<MarginDiv>
						<Span>참여자 : {joinPerson}</Span>
					</MarginDiv>
					<MarginDiv>
						<Span>소속 : {detail.department}</Span>
					</MarginDiv>
					<MarginDiv>
						<Span>{detail.time}</Span>
					</MarginDiv>
					<MarginDiv>
						{detail.hashtag.map((item, index) => (
							<Tag color="geekblue" key={index}>
								#{item}
							</Tag>
						))}
					</MarginDiv>
				</>
			)
		} else if (detail.type == 'photo') {
			const joinPerson =
				detail.joinPerson[0] + ' 외 ' + (detail.joinPerson.length - 1) + '인'
			return (
				<>
					<MarginDiv>
						<Span>참여자 : {joinPerson}</Span>
					</MarginDiv>
					<MarginDiv>
						<Span>소속 : {detail.department}</Span>
					</MarginDiv>
					<MarginDiv>
						<Span>{detail.time}</Span>
					</MarginDiv>
					<MarginDiv>
						{detail.hashtag.map((item, index) => (
							<Tag color="geekblue" key={index}>
								#{item}
							</Tag>
						))}
					</MarginDiv>
				</>
			)
		} else if (detail.type == 'memo') {
			return (
				<>
					<MarginDiv>
						<Span>작성자 : {detail.writer}</Span>
					</MarginDiv>
					<MarginDiv>
						<Span>내용 : {detail.content}</Span>
					</MarginDiv>
					<MarginDiv>
						<Span>{detail.time}</Span>
					</MarginDiv>
				</>
			)
		} else if (detail.type == 'direct') {
			return (
				<>
					<MarginDiv>
						<Span>소속 : {detail.department}</Span>
					</MarginDiv>
					<MarginDiv>
						<Span>작업지휘자 : {detail.conductor}</Span>
					</MarginDiv>
					<MarginDiv>
						<Span>작업기간 : {detail.workTime}</Span>
					</MarginDiv>
				</>
			)
		}
	}

	return <></>
}
