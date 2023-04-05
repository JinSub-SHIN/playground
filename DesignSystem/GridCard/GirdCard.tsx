import { Card, Col, Row } from 'antd'
import { ReactNode } from 'react'
import { CardDescription } from './CardDescription'

const { Meta } = Card

export interface GirdCardProps {
	clickFunction: (index: number) => void
	title: string
	description: VideoDescription[] | PhotoDescription[]
}

export interface VideoDescription {
	type: 'video'
	joinPerson: string[]
	department: string
	time: string
	hashtag: string[]
	children: ReactNode
}

export interface PhotoDescription {
	type: 'photo'
	joinPerson: string[]
	department: string
	time: string
	hashtag: string[]
	children: ReactNode
}

/**
 *
 * @paramType GirdCardProps
 * @param clickFunction (index: number) => void
 * @param title string
 * @param description VideoDescription[] Type || PhotoDescription[] Type
 * @returns
 */
export const GridCard = ({
	clickFunction,
	title,
	description,
}: GirdCardProps) => {
	return (
		<>
			<Row gutter={[16, 16]}>
				{description.map((item, index) => (
					<Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }} key={index}>
						<Card
							hoverable
							cover={item.children}
							onClick={() => clickFunction(index)}
						>
							<Meta
								title={title}
								description={<CardDescription description={item} />}
							/>
						</Card>
					</Col>
				))}
			</Row>
		</>
	)
}
