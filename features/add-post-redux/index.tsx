import { ChangeEventHandler, useState } from 'react';
import { createPost, postsActions } from 'entities/posts';
import { useAppDispatch } from 'shared/lib/redux';
import { isServerError } from 'shared/lib/isServerError';
import { alertService } from 'shared/lib/alertService';
import { Button } from 'shared/ui/Button';

export const AddPostRedux = () => {
    const dispatch = useAppDispatch();

    const [isLoading, setLoading] = useState(false);
    const [value, setValue] = useState('');

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value);
    };

    const handleCreate = () => {
        setLoading(true);
        createPost(value)
            .then((data) => {
                const title = data.at(-1)?.title!;
                alertService.success(`Add post: ${title}`);
                dispatch(postsActions.setPosts(data));
            })
            .catch((error) => {
                if (isServerError(error)) {
                    alertService.error(error.message);
                }
            })
            .finally(() => setLoading(false));
    };

    return (
        <div style={{ marginTop: 5, marginBottom: 5, display: 'flex', gap: 8 }}>
            <input type="text" value={value} onChange={handleChange} />
            <Button
                isDisabled={isLoading || !value.length}
                isLoading={isLoading}
                onClick={handleCreate}
            >
                Create Post
            </Button>
        </div>
    );
};
