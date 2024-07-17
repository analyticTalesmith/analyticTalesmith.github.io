import React from "react";
import Container from '@/app/components/(main elements)/Container';
import Breadcrumb from '@/app/components/(blog elements)/Breadcrumbs';


const BlogLayout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <div><Breadcrumb />
            <Container className="mb-4">{children}</Container>
        </div>);

};

export default BlogLayout;