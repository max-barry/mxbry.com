import React, { Component, Fragment } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import styled from 'react-emotion';
import { Section } from '../../components/Structures';
import { FocusText, List } from '../../components/Display';
import {
    colors,
    bs,
    styles,
    shevy,
    fontWeights,
    dimensions,
    mq
} from '../../settings';

const signupEndpoint =
    '//mxbry.us6.list-manage.com/subscribe/post?u=1d2b23c8bb5f34f9fdc9b70f9&id=7ac63c10c9';

const contactDetails = [
    { title: 'Email', deck: 'max (at) mxbry.com' },
    { title: 'LinkedIn', link: 'https://www.linkedin.com/in/maxbarry/' },
    { title: 'GitHub', link: 'https://github.com/max-barry' },
    { title: 'Medium', link: 'https://words.mxbry.com/' }
];

const Form = styled('form')(
    mq({
        display: 'flex',
        alignItems: 'center',
        flexDirection: ['row', 'column']
    })
);

const sharedInputStyles = {
    ...shevy.h5,
    margin: 0,
    border: 0,
    boxShadow: 'none',
    fontWeight: fontWeights.medium,
    padding: styles.fn.pad(0.5, 1),
    lineHeight: 1,
    borderRadius: dimensions.bevel
};

const Input = styled('input')(
    sharedInputStyles,
    mq({
        display: ['inline-block', 'block'],
        width: ['auto', '100%'],
        border: `1px solid ${colors.greyDark}`,
        marginBottom: [0, bs(0.5)],
        '&:hover, &:active, &:focus': {
            outline: 0
        },
        '&:focus': {
            boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)'
        },
        '&:invalid': {
            borderColor: colors.error
        }
    })
);

const Submit = styled('button')(sharedInputStyles, ({ success, loading }) =>
    mq({
        display: ['inline-block', 'block'],
        width: ['auto', '100%'],
        backgroundColor:
            (success && colors.valid) ||
            (loading && colors.loading) ||
            colors.grey2,
        color: ((success || loading) && 'transparent') || colors.black,
        marginLeft: [bs(1), 0],
        position: 'relative',
        lineHeight: [1, `${dimensions.button}px`],
        '&:not([disabled])': {
            cursor: 'pointer',
            '&:hover, &:focus, &:active': {
                backgroundColor: styles.fn.focus(
                    (success && colors.valid) ||
                        (loading && colors.loading) ||
                        colors.grey2
                ),
                outline: 0
            }
        },
        '&::before': {
            content:
                (success && '"Success"') || (loading && '"Saving..."') || null,
            position: 'absolute',
            top: '50%',
            left: 0,
            right: 0,
            color: colors.white,
            transform: 'translateY(-50%)'
        }
    })
);

class MailingListForm extends Component {
    inputRef = null;

    onSubmit = event => {
        event.preventDefault();
        this.props.subscribe({
            EMAIL: this.inputRef.value
        });
    };

    render = () => {
        const { status, message } = this.props;
        const isSuccess = status === 'success';
        const isLoading = status === 'sending';
        return (
            <Fragment>
                <p>
                    <i>{message}</i>
                </p>
                <Form onSubmit={this.onSubmit}>
                    <Input
                        type="email"
                        name="email"
                        placeholder="Email"
                        innerRef={node => (this.inputRef = node)}
                        disabled={isSuccess || isLoading}
                    />
                    <Submit
                        success={isSuccess}
                        loading={isLoading}
                        disabled={isSuccess || isLoading}
                        type="submit"
                    >
                        Keep me updated
                    </Submit>
                </Form>
            </Fragment>
        );
    };
}

const ContactLinks = props => (
    <Section maxWidth="none" {...props}>
        <FocusText color={colors.greyDark}>
            <h3>What I do a lot of...</h3>
            <p>
                Meeting and talking with new or early-stage businesses. Often we
                talk about product direction and creative development, but also
                early-stage growth ideas, growing a business through new hires,
                and technical architecture.
            </p>
            <h3>What I also do...</h3>
            <p>
                Experience design and technical development. My long-background
                is in experience design from idea to deployment. I really like
                making fast, accessible, and performant UIs that just feel&nbsp;
                <i>nice</i>.<br />
                <br />I work on React JS projects, can program in Python, do a
                lot of work with the Google Cloud Platform, and have always made
                video wherever I've been. I write for myself, but I'm always
                looking for an opportunity to write for a regular outlet on
                topics including user experience and the internet.
            </p>
            <h3>My mailing list</h3>
            <p>Once or twice a year I send out an email about new projects</p>
            <MailchimpSubscribe
                url={signupEndpoint}
                render={props => <MailingListForm {...props} />}
            />
            {/* <MailchimpSubscribe url={signupEndpoint} /> */}
            <List style={{ marginTop: bs(2) }} items={contactDetails} />
        </FocusText>
    </Section>
);

export default ContactLinks;
