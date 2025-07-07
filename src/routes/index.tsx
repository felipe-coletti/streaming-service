import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { SignUp } from '../pages/SignUp'
import { SignIn } from '../pages/SignIn'
import { ResetPassword } from '../pages/ResetPassword'
import { Serie } from '../pages/Serie'
import { Episode } from '../pages/Episode'
import { NotFound } from '../pages/NotFound'
import { Category } from '../pages/Category'

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/sign-up' element={<SignUp />} />
			<Route path='/sign-in' element={<SignIn />} />
			<Route path='/reset-password' element={<ResetPassword />} />
			<Route path='/categories/:id' element={<Category />} />
			<Route path='/series/:id' element={<Serie />} />
			<Route path='/series/:id/episode/:id' element={<Episode />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	)
}
