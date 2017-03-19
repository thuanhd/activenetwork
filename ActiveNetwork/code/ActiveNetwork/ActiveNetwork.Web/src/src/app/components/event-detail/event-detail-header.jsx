import React, {Component} from 'react';
import {virtualPath} from '../../../commons/constant'
import {browserHistory} from 'react-router';
import {ANEventDetailServiceInstance} from '../../services/anevent-detail-service'
import {JoinEventDialog} from '../join-event-dialog';
import {userStore} from '../../store/user-store';

const CURRENT_TAB_WALL = 'wall',
  CURRENT_TAB_DESCRIPTION = 'description',
  CURRENT_TAB_PEOPLE = 'people',
  CURRENT_TAB_PHOTOS = 'photos';

export class EventDetailHeaderComponent extends Component {
  joinEventDialog;
  componentWillMount() {

    this.setState({
      currentTab: CURRENT_TAB_WALL,
      eventHeader: {EventCoverPhoto: {Url: "/img/cover/loading.jpg"}},
    });
  }

  async componentDidMount() {
    this.setState({eventHeader: await this.getData()});
  }

  async getData() {
    let a = await ANEventDetailServiceInstance.getANEventDetailHeader(this.props.eventId);
    return a;
  }

  changeTab(e, tab) {
    this.setState({
      currentTab: tab
    });
    e.preventDefault();
    browserHistory.push(`${virtualPath}/event/${this.props.eventId}/${tab}`)
  }

  clickJoinEventDialog(eventId) {
    this.joinEventDialog && this.joinEventDialog.show(eventId);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="cover profile">
            <div className="wrapper">
              <div className="image">
                <img src={this.state.eventHeader.EventCoverPhoto.Url} className="show-in-modal" alt="people"/>
              </div>
            </div>
            <div className="cover-info">
              <div className="name"><a href="#">{this.state.eventHeader.EventTitle}</a></div>
              <ul className="cover-nav">
                <li className={this.state.currentTab == CURRENT_TAB_WALL ? 'active' : ''}><a href=""
                                                                                             onClick={(e) => this.changeTab(e, CURRENT_TAB_WALL)}><i
                  className="fa fa-fw fa-bars"/> Bài đăng</a></li>

                <li className={this.state.currentTab == CURRENT_TAB_DESCRIPTION ? 'active' : ''}><a href=""
                                                                                                    onClick={(e) => this.changeTab(e, CURRENT_TAB_DESCRIPTION)}><i
                  className="fa fa-fw fa-user"/> Mô tả</a></li>

                <li className={this.state.currentTab == CURRENT_TAB_PEOPLE ? 'active' : ''}><a href=""
                                                                                               onClick={(e) => this.changeTab(e, CURRENT_TAB_PEOPLE)}><i
                  className="fa fa-fw fa-users"/>
                  Người tham gia</a></li>

                <li className={this.state.currentTab == CURRENT_TAB_PHOTOS ? 'active' : ''}><a href=""
                                                                                               onClick={(e) => this.changeTab(e, CURRENT_TAB_PHOTOS)}><i
                  className="fa fa-fw fa-image"/>
                  Hình ảnh</a></li>
              </ul>
              <ul className="thamgia">
                <li>
                  <button type="button" onClick={() => this.clickJoinEventDialog(this.props.eventId)} className="btn btn-lg btn-primary pull-right">Tham gia</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <JoinEventDialog ref={(e) => this.joinEventDialog = e} currentUser={userStore.getState().currentUser.Id}/>
      </div>
    );
  }
}