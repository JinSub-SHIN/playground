import styled, { CSSProperties } from 'styled-components'
import { ReactNode } from 'react'
import Header from 'components/component/layout/Header'
import Footer from 'components/component/layout/Footer'

const Layout = styled.div`
	display: flex;
	justify-content: center;
	min-height: 74vh;
`

const Sider = styled.div`
	flex: 1;
`

const Content = styled.div<{ width?: string }>`
	/* width: 428px; */
	height: auto;
	padding: 50px 0 61px 0;

	width: ${props => props.width};
`

type TypeofLayout = {
	children: ReactNode
	title: string
	contentWidth?: string
}

function DefaultLayout({ children, title, contentWidth }: TypeofLayout) {
	return (
		<>
			<Header title={title} />
			<Layout>
				<Sider />
				<Content width={contentWidth}>{children}</Content>
				<Sider />
			</Layout>
			<Footer />
		</>
	)
}

export default DefaultLayout
