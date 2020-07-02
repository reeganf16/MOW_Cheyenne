import React, { Component } from 'react';
import '../stylesheets/BoardMember.css';
import '../stylesheets/Text.css';
import { Container, Row } from 'reactstrap';
import { BoardMemberCard } from './BoardMemberCard';

export class BoardMembers extends Component {
    static displayName = BoardMembers.name;

    constructor(props) {
        super(props);
        this.state = {
            members: [],
            loading: true
        }
    }

    componentDidMount() {
        this.populateBoardMembers();
    }

    async populateBoardMembers() {
        const response = await fetch('api/boardMembers');
        const data = await response.json();
        this.setState({members: data, loading: false});
    }

    render() {
        let contents = this.state.loading ?
            <p><em>Loading...</em></p> :
            BoardMembers.renderBoardMemberCards(this.state.members);

        return (
            <div>
                {contents}
            </div>
        )
    }

    static renderBoardMemberCards(members) {
        return (
            <div className='board'>
                <Container>
                    <h2 className='light-h2'>Board Members</h2>
                    <hr className='light-underline'></hr>
                    <Row>
                        {
                            members.map(m => {
                                return (
                                    <BoardMemberCard key={m.id} boardMember={m} />
                                )
                            })
                        }
                    </Row>
                    <hr className='light-underline'></hr>
                </Container>
            </div>
        );
    }
}

