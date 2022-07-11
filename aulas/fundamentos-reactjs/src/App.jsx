import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Post } from './components/Post';

import styles from './App.module.css';

import './global.css';

export function App() {
	return (
		<div>
			<Header />

			<div className={styles.wrapper}>
				<Sidebar />

				<main>
					<Post
						author="Marcelo Carvalho"
						content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et autem aliquam architecto dolorem saepe in placeat quaerat ea! Quo saepe blanditiis ipsa architecto magni fuga, ut nisi repudiandae sint. Distinctio."
					/>
					<Post author="Diego Fernandes" content="Um novo post muito legal" />
				</main>
			</div>
		</div>
	);
}
