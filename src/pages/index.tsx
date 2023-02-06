import type {PageConfig} from 'next';
import Link from 'next/link';
import type {ReactNode} from 'react';
import {posts} from '../posts';

// Sweet zero js 🤑
export const config: PageConfig = {
	unstable_runtimeJS: false,
};

export default function Home() {
	return (
		<main className="space-y-8">
			<div>
				<a
					className="text-sm text-yellow-700 dark:text-yellow-500"
					href="https://www.nullsec.ca"
				>
					NullSec dot CA
				</a>
			</div>

			<h2>
				<span>r00tsec was taken..</span>
			</h2>

			<ul className="space-y-1 list-disc list-inside">
				{posts
					.filter(post => !post.hidden)
					.map(post => (
						<BlogLink key={post.slug} href={`/${post.slug}`}>
							{post.name}
						</BlogLink>
					))}
			</ul>
		</main>
	);
}

function BlogLink(props: {href: string; children: ReactNode}) {
	return (
        <li>
			<Link
                passHref
                href={props.href}
                className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-600">

                {props.children}

            </Link>
		</li>
    );
}
