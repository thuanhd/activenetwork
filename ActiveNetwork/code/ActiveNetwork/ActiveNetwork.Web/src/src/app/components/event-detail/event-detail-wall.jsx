import React, {Component} from 'react';
import {ANEventDetailServiceInstance} from '../../services/anevent-detail-service';
import {EventDetailWallDescriptionComponent} from './event-detail-wall-description';
import {EventDetailWallMembersComponent} from './event-detail-wall-members';
import {EventDetailWallOtherEventsComponent} from './event-detail-wall-other-events';


export class EventDetailWallComponent extends Component {
  eventId;

  componentWillMount() {
    this.setState({
      eventDecription: {
        EventInformation: {},
        Host: {
          Profile: {
            Avatar: {}
          },
        },
      }
    });
    this.eventId = this.props.params.id;
  }

  componentDidMount(){
    this.loadData();
  }


  loadData() {
    this.getInfoData();
    this.getMemberData();
    this.getOtherEvents();
  }
  componentWillReceiveProps(props) {
    this.eventId = props.params.id;
    this.loadData();
  }

  async getInfoData() {
    let a = await ANEventDetailServiceInstance.getANEventDetailInformation(this.eventId);
    this.setState({
      eventDecription: a,
    });
  }

  async getMemberData() {
    let a = await ANEventDetailServiceInstance.getANEventDetailMember(this.eventId);
    this.setState({
      eventMember: a,
    });
  }

  async getOtherEvents() {
    this.setState({
      otherEvents: await ANEventDetailServiceInstance.getRelatedEvents(this.eventId)
    })
  }

  render() {
    return (<div className="row">
      <div className="col-md-5">
        <EventDetailWallDescriptionComponent eventDecription={this.state.eventDecription}/>
        <EventDetailWallMembersComponent eventMember={this.state.eventMember}/>
        <EventDetailWallOtherEventsComponent otherEvents={this.state.otherEvents}/>
      </div>
      <div className="col-md-7">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12">
                <div className="box profile-info n-border-top">
                  <form>
                          <textarea className="form-control input-lg p-text-area" rows="2"
                                    placeholder="Whats in your mind today?"/>
                  </form>
                  <div className="box-footer box-form">
                    <button type="button" className="btn btn-azure pull-right">Post</button>
                    <ul className="nav nav-pills">
                      <li><a href="#"><i className="fa fa-map-marker"/></a></li>
                      <li><a href="#"><i className="fa fa-camera"/></a></li>
                      <li><a href="#"><i className=" fa fa-film"/></a></li>
                      <li><a href="#"><i className="fa fa-microphone"/></a></li>
                    </ul>
                  </div>
                </div>

                <div className="box box-widget">
                  <div className="box-header with-border">
                    <div className="user-block">
                      <img className="img-circle" src="/img/Friends/guy-3.jpg" alt="User Image"/>
                      <span className="username"><a href="#">John Breakgrow jr.</a></span>
                      <span className="description">Shared publicly - 7:30 PM Today</span>
                    </div>
                  </div>

                  <div className="box-body" style={{display: 'block'}}>
                    <img className="img-responsive show-in-modal" src="/img/Post/young-couple-in-love.jpg"
                         alt="Photo"/>
                    <p>I took this photo this morning. What do you guys think?</p>
                    <button type="button" className="btn btn-default btn-xs"><i className="fa fa-share"/> Share
                    </button>
                    <button type="button" className="btn btn-default btn-xs"><i className="fa fa-thumbs-o-up"/>
                      Like
                    </button>
                    <span className="pull-right text-muted">127 likes - 3 comments</span>
                  </div>
                  <div className="box-footer box-comments" style={{display: 'block'}}>
                    <div className="box-comment">
                      <img className="img-circle img-sm" src="/img/Friends/guy-2.jpg" alt="User Image"/>
                      <div className="comment-text">
                          <span className="username">
                          Maria Gonzales
                          <span className="text-muted pull-right">8:03 PM Today</span>
                          </span>
                        It is a long established fact that a reader will be distracted
                        by the readable content of a page when looking at its layout.
                      </div>
                    </div>

                    <div className="box-comment">
                      <img className="img-circle img-sm" src="/img/Friends/guy-3.jpg" alt="User Image"/>
                      <div className="comment-text">
                          <span className="username">
                          Luna Stark
                          <span className="text-muted pull-right">8:03 PM Today</span>
                          </span>
                        It is a long established fact that a reader will be distracted
                        by the readable content of a page when looking at its layout.
                      </div>
                    </div>
                  </div>
                  <div className="box-footer" style={{display: 'block'}}>
                    <form action="#" method="post">
                      <img className="img-responsive img-circle img-sm" src="/img/Friends/guy-3.jpg"
                           alt="Alt Text"/>
                      <div className="img-push">
                        <input type="text" className="form-control input-sm"
                               placeholder="Press enter to post comment"/>
                      </div>
                    </form>
                  </div>
                </div>


                <div className="box box-widget">
                  <div className="box-header with-border">
                    <div className="user-block">
                      <img className="img-circle" src="/img/Friends/guy-3.jpg" alt="User Image"/>
                      <span className="username"><a href="#">Jonathan Burke Jr.</a></span>
                      <span className="description">Shared publicly - 7:30 PM Today</span>
                    </div>
                  </div>
                  <div className="box-body">
                    <p>Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at</p>

                    <p>the coast of the Semantics, a large language ocean.
                      A small river named Duden flows by their place and supplies
                      it with the necessary regelialia. It is a paradisematic
                      country, in which roasted parts of sentences fly into
                      your mouth.</p>

                    <div className="attachment-block clearfix">
                      <img className="attachment-img show-in-modal" src="/img/Photos/2.jpg"
                           alt="Attachment Image"/>
                      <div className="attachment-pushed">
                        <h4 className="attachment-heading"><a href="http://www.bootdey.com/">Lorem ipsum text
                          generator</a></h4>
                        <div className="attachment-text">
                          Description about the attachment can be placed here.
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry... <a
                          href="#">more</a>
                        </div>
                      </div>
                    </div>
                    <button type="button" className="btn btn-default btn-xs"><i className="fa fa-share"/> Share
                    </button>
                    <button type="button" className="btn btn-default btn-xs"><i className="fa fa-thumbs-o-up"/>
                      Like
                    </button>
                    <span className="pull-right text-muted">45 likes - 2 comments</span>
                  </div>
                  <div className="box-footer box-comments">
                    <div className="box-comment">
                      <img className="img-circle img-sm" src="/img/Friends/guy-5.jpg" alt="User Image"/>
                      <div className="comment-text">
                          <span className="username">
                          Maria Gonzales
                          <span className="text-muted pull-right">8:03 PM Today</span>
                          </span>
                        It is a long established fact that a reader will be distracted
                        by the readable content of a page when looking at its layout.
                      </div>
                    </div>
                    <div className="box-comment">
                      <img className="img-circle img-sm" src="/img/Friends/guy-6.jpg" alt="User Image"/>
                      <div className="comment-text">
                          <span className="username">
                          Nora Havisham
                          <span className="text-muted pull-right">8:03 PM Today</span>
                          </span>
                        The point of using Lorem Ipsum is that it has a more-or-less
                        normal distribution of letters, as opposed to using
                        'Content here, content here', making it look like readable English.
                      </div>
                    </div>
                  </div>
                  <div className="box-footer">
                    <form action="#" method="post">
                      <img className="img-responsive img-circle img-sm" src="/img/Friends/guy-3.jpg"
                           alt="Alt Text"/>
                      <div className="img-push">
                        <input type="text" className="form-control input-sm"
                               placeholder="Press enter to post comment"/>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="box box-widget">
                  <div className="box-header with-border">
                    <div className="user-block">
                      <img className="img-circle" src="/img/Friends/guy-3.jpg" alt="User Image"/>
                      <span className="username"><a href="#">John Breakgrow jr.</a></span>
                      <span className="description">Shared publicly - 7:30 PM Today</span>
                    </div>
                  </div>

                  <div className="box-body" style={{display: 'block'}}>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac iaculis ligula, eget
                      efficitur nisi. In vel rutrum orci. Etiam ut orci volutpat, maximus quam vel, euismod orci.
                      Nunc in urna non lectus malesuada aliquet. Cum sociis natoque penatibus et magnis dis
                      parturient montes, nascetur ridiculus mus. Nam dignissim mi ac metus consequat, a pharetra
                      neque molestie. Maecenas condimentum lorem quis vulputate volutpat. Etiam sapien diam
                    </p>
                    <button type="button" className="btn btn-default btn-xs"><i className="fa fa-share"/> Share
                    </button>
                    <button type="button" className="btn btn-default btn-xs"><i className="fa fa-thumbs-o-up"/>
                      Like
                    </button>
                    <span className="pull-right text-muted">127 likes - 3 comments</span>
                  </div>
                  <div className="box-footer box-comments" style={{display: 'block'}}>
                    <div className="box-comment">
                      <img className="img-circle img-sm" src="/img/Friends/guy-2.jpg" alt="User Image"/>
                      <div className="comment-text">
                          <span className="username">
                          Maria Gonzales
                          <span className="text-muted pull-right">8:03 PM Today</span>
                          </span>
                        It is a long established fact that a reader will be distracted
                        by the readable content of a page when looking at its layout.
                      </div>
                    </div>

                    <div className="box-comment">
                      <img className="img-circle img-sm" src="/img/Friends/guy-3.jpg" alt="User Image"/>
                      <div className="comment-text">
                          <span className="username">
                          Luna Stark
                          <span className="text-muted pull-right">8:03 PM Today</span>
                          </span>
                        It is a long established fact that a reader will be distracted
                        by the readable content of a page when looking at its layout.
                      </div>
                    </div>
                  </div>
                  <div className="box-footer" style={{display: 'block'}}>
                    <form action="#" method="post">
                      <img className="img-responsive img-circle img-sm" src="/img/Friends/guy-3.jpg"
                           alt="Alt Text"/>
                      <div className="img-push">
                        <input type="text" className="form-control input-sm"
                               placeholder="Press enter to post comment"/>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="box box-widget">
                  <div className="box-header with-border">
                    <div className="user-block">
                      <img className="img-circle" src="/img/Friends/guy-3.jpg" alt="User Image"/>
                      <span className="username"><a href="#">John Breakgrow jr.</a></span>
                      <span className="description">Shared publicly - 7:30 PM Today</span>
                    </div>
                  </div>

                  <div className="box-body" style={{display: 'block'}}>
                    <img className="img-responsive pad show-in-modal" src="/img/Photos/3.jpg" alt="Photo"/>
                    <p>I took this photo this morning. What do you guys think?</p>
                    <button type="button" className="btn btn-default btn-xs"><i className="fa fa-share"/> Share
                    </button>
                    <button type="button" className="btn btn-default btn-xs"><i className="fa fa-thumbs-o-up"/>
                      Like
                    </button>
                    <span className="pull-right text-muted">127 likes - 3 comments</span>
                  </div>
                  <div className="box-footer box-comments" style={{display: 'block'}}>
                    <div className="box-comment">
                      <img className="img-circle img-sm" src="/img/Friends/guy-2.jpg" alt="User Image"/>
                      <div className="comment-text">
                          <span className="username">
                          Maria Gonzales
                          <span className="text-muted pull-right">8:03 PM Today</span>
                          </span>
                        It is a long established fact that a reader will be distracted
                        by the readable content of a page when looking at its layout.
                      </div>
                    </div>

                    <div className="box-comment">
                      <img className="img-circle img-sm" src="/img/Friends/guy-3.jpg" alt="User Image"/>
                      <div className="comment-text">
                          <span className="username">
                          Luna Stark
                          <span className="text-muted pull-right">8:03 PM Today</span>
                          </span>
                        It is a long established fact that a reader will be distracted
                        by the readable content of a page when looking at its layout.
                      </div>
                    </div>
                  </div>
                  <div className="box-footer" style={{display: 'block'}}>
                    <form action="#" method="post">
                      <img className="img-responsive img-circle img-sm" src="/img/Friends/guy-3.jpg"
                           alt="Alt Text"/>
                      <div className="img-push">
                        <input type="text" className="form-control input-sm"
                               placeholder="Press enter to post comment"/>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
}