import { Card, Col, Dropdown, MenuProps, Row } from 'antd'
import { ReactNode, useState } from 'react'
import { CardDescription } from './CardDescription'
import styled from 'styled-components'
import {
	CardOptionIcon,
	DeleteIcon,
	DownLoadIcon,
	EditIcon,
	StarIcon,
} from 'images'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/reducer/rootReducer'

const { Meta } = Card

export interface GirdCardProps {
	clickFunction: (index: number) => void
	description: (
		| PhotoDescription
		| VideoDescription
		| MeMoDescription
		| DirectCameraDescription
	)[]
	detail?:
		| VideoDescriptionStoreOnly
		| PhotoDescriptionStoreOnly
		| MeMoDescriptionStoreOnly
		| DirectCameraDescriptionStoreOnly
}

export const Image = styled.img`
	object-fit: initial;
	min-height: 230px;
	max-height: 230px;
`

export interface VideoDescription {
	type: 'video'
	joinPerson: string[]
	department: string
	time: string
	title: string
	hashtag: string[]
	star: boolean
	children: ReactNode
	url: string
}

export interface PhotoDescription {
	type: 'photo'
	joinPerson: string[]
	department: string
	time: string
	hashtag: string[]
	star: boolean
	children: ReactNode
	title: string
}

export interface MeMoDescription {
	type: 'memo'
	writer: string
	content: string
	time: string
	star: boolean
	children: ReactNode
	title: string
}

export interface DirectCameraDescription {
	type: 'direct'
	jobName: string
	department: string
	conductor: string
	workTime: string
	dataUrl: string
	children: ReactNode
	star?: boolean
}

/**
 * store 전용 데이터
 */
export interface VideoDescriptionStoreOnly {
	type: 'video'
	joinPerson: string[]
	department: string
	time: string
	title: string
	hashtag: string[]
	star: boolean
	url: string
}

/**
 * store 전용 데이터
 */
export interface PhotoDescriptionStoreOnly {
	type: 'photo'
	joinPerson: string[]
	department: string
	time: string
	title: string
	hashtag: string[]
	star: boolean
	url: string
}

/**
 * store 전용 데이터
 */
export interface MeMoDescriptionStoreOnly {
	type: 'memo'
	writer: string
	content: string
	title: string
	time: string
	star: boolean
	url: string
}

/**
 * store 전용 데이터
 */
export interface DirectCameraDescriptionStoreOnly {
	type: 'direct'
	jobName: string
	department: string
	conductor: string
	workTime: string
	dataUrl: string
	url: string
}

const FlexTitle = styled.div`
	display: flex;
	justify-content: space-between;
`

const ButtonTitle = styled.div`
	display: flex;
	justify-content: space-around;
`

const TitleSpan = styled.span``

const CardTitleImg = styled.img``

const IconStyled = styled.img``

/**
 *
 * @paramType GirdCardProps
 * @param clickFunction (index: number) => void
 * @param description (PhotoDescription | VideoDescription | MeMoDescription | DirectCameraDescription)[]
 * @returns
 */
export const GridCard = ({ clickFunction, description }: GirdCardProps) => {
	const dispatch = useDispatch()
	const cardItems = useSelector((state: RootState) => state.cardList.items)
	const [cardIndex, setCardIndex] = useState<number>()

	const handleShowOption = (e: React.MouseEvent) => {
		e.stopPropagation()
	}

	const handleMenuClick: MenuProps['onClick'] = e => {
		e.domEvent.stopPropagation()

		console.log('click', e)
		console.log(cardItems[cardIndex!])

		if (e.key == '1') {
			console.log('다운로드 작업')
		}

		if (e.key == '2') {
			console.log('수정 작업')
		}

		if (e.key == '3') {
			console.log('즐겨찾기 작업')
		}

		if (e.key == '4') {
			console.log('삭제작업')
		}
	}

	const returnItems = (status: boolean) => {
		let items: MenuProps['items'] = []

		if (!status) {
			items = [
				{
					key: '1',
					label: '다운로드',
					icon: <IconStyled src={DownLoadIcon} />,
				},
				{
					key: '2',
					label: '수정',
					icon: <IconStyled src={EditIcon} />,
				},
				{
					key: '3',
					label: '즐겨찾기',
					icon: <IconStyled src={StarIcon} />,
				},
				{
					key: '4',
					label: '삭제',
					icon: <IconStyled src={DeleteIcon} />,
				},
			]
		} else {
			items = [
				{
					key: '1',
					label: '다운로드',
					icon: <IconStyled src={DownLoadIcon} />,
				},
				{
					key: '2',
					label: '수정',
					icon: <IconStyled src={EditIcon} />,
				},
				{
					key: '3',
					label: '즐겨찾기 해제',
					icon: <IconStyled src={StarIcon} />,
				},
				{
					key: '4',
					label: '삭제',
					icon: <IconStyled src={DeleteIcon} />,
				},
			]
		}

		const menuProps = {
			items,
			onClick: handleMenuClick,
		}

		return menuProps
	}

	const handleOpen = (index: number) => {
		setCardIndex(index)
	}
	return (
		<>
			<Row gutter={[16, 16]}>
				{description.map((item, index) => (
					<Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }} key={index}>
						{item.type == 'direct' ? (
							<Card
								hoverable
								cover={item.children}
								onClick={() => clickFunction(index)}
							>
								<Meta
									title={
										<FlexTitle>
											<TitleSpan>{}</TitleSpan>
										</FlexTitle>
									}
									description={<CardDescription description={item} />}
								/>
							</Card>
						) : (
							<Card
								hoverable
								cover={item.children}
								onClick={() => clickFunction(index)}
							>
								{item.star ? (
									<>
										<Meta
											title={
												<FlexTitle>
													<TitleSpan>{item.title}</TitleSpan>
													<Dropdown
														menu={returnItems(true)}
														placement="bottom"
														trigger={['click', 'hover']}
														onOpenChange={() => handleOpen(index)}
													>
														<CardTitleImg
															src={CardOptionIcon}
															onClick={handleShowOption}
														/>
													</Dropdown>
												</FlexTitle>
											}
											description={<CardDescription description={item} />}
										/>
									</>
								) : (
									<>
										<Meta
											title={
												<FlexTitle>
													<TitleSpan>{item.title}</TitleSpan>
													<Dropdown
														menu={returnItems(false)}
														placement="bottom"
														trigger={['click', 'hover']}
														onOpenChange={() => handleOpen(index)}
													>
														<CardTitleImg
															src={CardOptionIcon}
															onClick={handleShowOption}
														/>
													</Dropdown>
												</FlexTitle>
											}
											description={<CardDescription description={item} />}
										/>
									</>
								)}
							</Card>
						)}
					</Col>
				))}
			</Row>
		</>
	)
}
