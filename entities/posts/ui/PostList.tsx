import { TPost } from '../model/TPost';
import styles from './styles.module.css';

type Props = {
    postList: TPost[];
};

export const PostList = ({ postList }: Props) => {
    console.log('PostList render', postList);

    return (
        <table className={styles.container}>
            <tbody>
                <tr className={styles.row}>
                    <th className={styles.cell}>Id</th>
                    <th className={styles.cell}>Title</th>
                </tr>

                {postList.map((post) => (
                    <tr className={styles.row} key={post.id}>
                        <td className={styles.cell}>{post.id}</td>
                        <td className={styles.cell}>{post.title}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
