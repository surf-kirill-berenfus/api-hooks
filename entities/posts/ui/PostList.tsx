import Image from 'next/image';
import { TPost } from '../model/TPost';
import styles from './styles.module.css';
import { Spinner } from 'shared/ui/Spinner';

type Props = {
    postList: TPost[];
    isLoading?: boolean;
};

export const PostList = ({ isLoading, postList }: Props) => {
    return (
        <div style={{ width: 'fit-content' }}>
            <table className={styles.container}>
                <thead>
                    <tr className={styles.header}>
                        <th className={styles.cell}>Id</th>
                        <th className={styles.cell}>Title</th>
                    </tr>
                </thead>

                <tbody className={styles.body}>
                    {isLoading && (
                        <tr className={styles.tableLoader}>
                            <td>
                                <Spinner />
                            </td>
                        </tr>
                    )}
                    {postList.length ? (
                        postList.map((post) => (
                            <tr className={styles.row} key={post.id}>
                                <td className={styles.cell}>{post.id}</td>
                                <td className={styles.cell}>{post.title}</td>
                            </tr>
                        ))
                    ) : (
                        <tr className={styles.row}>
                            <td className={styles.cell} />
                            <td className={styles.cell} />
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};
