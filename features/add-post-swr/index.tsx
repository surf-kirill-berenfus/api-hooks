import { ChangeEventHandler, useState } from 'react';
import { useAddPostMutation, usePostsSwr, usePostsSwrMutation } from 'entities/posts';
import { Button } from 'shared/ui/Button';

export const AddPostSwr = () => {
    // const { mutate } = usePostsSwr();  mutate({data})
    // const { mutate } = useSWRConfig();  mutate(data)

    const { trigger, /* data, */ isMutating } = usePostsSwrMutation();

    const [value, setValue] = useState('');

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value);
    };

    const handleCreate = () => {
        trigger(
            { title: value }
            /* {
                optimisticData: (posts) => {
                    if (!posts) return [{ id: 1, title: value }];

                    return [...posts, { id: posts.length + 1, title: value }];
                },
            } */
        );
    };

    return (
        <div style={{ marginTop: 5, marginBottom: 5, display: 'flex', gap: 8 }}>
            <input type="text" value={value} onChange={handleChange} />
            <Button
                isDisabled={isMutating || !value.length}
                isLoading={isMutating}
                onClick={handleCreate}
            >
                Create Post
            </Button>
        </div>
    );
};
