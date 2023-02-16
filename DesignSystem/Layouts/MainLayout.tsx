import styled from 'styled-components'
import Header from 'components/component/main/Header'
import MainContent from 'components/component/main/MainContent'
import { useSelector } from 'react-redux'
import { RootState } from 'redux/reducer/rootReducer'

// styled-componets 로 props 로 스타일링 하는 방법 예시
const RootLayout = styled.div<{ used: boolean }>`
	@media screen and (max-width: 1920px) {
	}

	@media screen and (max-width: 1366px) {
		/* background: green; */
	}

	/* opacity: 0.92; */
`

const Layout = styled.div`
	/* width: 100%; */
	display: flex;
	justify-content: center;
`

const TopPart = styled.div`
	height: 18vh;
`

const Sider = styled.div`
	flex: 1;
`

// 1000px 적응형
const Content = styled.div`
	height: 82vh;
`
const MainLayout = () => {
	const count = useSelector((state: RootState) => state.counter.value)

	return (
		<div>
			<RootLayout used={true}>
				<TopPart />
				<Layout>
					<Sider />
					<Content>
						<Header />
						<MainContent />
					</Content>
					<Sider />
				</Layout>
			</RootLayout>
		</div>
	)
}

export default MainLayout
