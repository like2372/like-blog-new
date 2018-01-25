import Home from '@/components/blog/child/main/Home'
import About from '@/components/blog/child/main/about'
import Archive from '@/components/blog/child/main/archive'
import Blog from "@/components/blog/Blog"

export default {
	path: '/',
	name: 'blog',
	component: Blog,
	children: [{
		path: '/home',
		name: 'home',
		component:Home,
	}, {
		path: '/archive',
		name: 'archive',
		component:Archive,
	}, {
		path: '/about',
		name: 'about',
		component:About,
	}],
}