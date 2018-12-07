import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'

import { ArticleContainer, ArticleListItem, ArticleContent, ArticleHeader, PostTime, Summary, MediumLink } from './elements'

const ArticleList = props => {
    return (
        <ArticleContainer>
            <ArticleListItem>
                <ArticleContent>
                    <ArticleHeader>
                        <a href='https://medium.com/@maher.alkendi2/learn-how-full-stack-apps-work-by-building-a-simple-one-using-javascript-part-1-38e237694012'>Learn how Full-stack apps work by building a simple one using JavaScript (Part 1)</a>
                    </ArticleHeader>
                    <PostTime>17th November 2018</PostTime>
                    <Summary>
                        Learn how full-stack application works by building a simple fake weather API.
                    </Summary>
                    <MediumLink href='https://medium.com/@maher.alkendi2/learn-how-full-stack-apps-work-by-building-a-simple-one-using-javascript-part-1-38e237694012'>read more <FontAwesomeIcon icon={faExternalLinkAlt} /></MediumLink>
                </ArticleContent>
            </ArticleListItem>

                        <ArticleListItem>
                <ArticleContent>
                    <ArticleHeader>
                        <a href='https://medium.com/@maher.alkendi2/learn-how-full-stack-apps-work-by-building-a-simple-one-using-javascript-part-2-45b42c1f2e84'>Learn how Full-stack apps work by building a simple one using JavaScript (Part 2)</a>
                    </ArticleHeader>
                    <PostTime>17th November 2018</PostTime>
                    <Summary>
                    Build a front-end app that can get data from a back-end API.
                    </Summary>
                    <MediumLink href='https://medium.com/@maher.alkendi2/learn-how-full-stack-apps-work-by-building-a-simple-one-using-javascript-part-2-45b42c1f2e84'>read more <FontAwesomeIcon icon={faExternalLinkAlt} /></MediumLink>
                </ArticleContent>
            </ArticleListItem>
        </ArticleContainer>
    )
}

export default ArticleList