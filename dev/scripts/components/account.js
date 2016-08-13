import React from 'react'

export default React.createClass({
  render() {
    return (
        <div>
            <div className="section">
                <h2>Account</h2>
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Save" />
                    </div>
                </form>
            </div>
            <div className="section">
                <h2>Change Password</h2>
                <form>
                    <div className="form-group">
                        <label>Current Password</label>
                        <input type="text" />
                    </div>
                    <div className="form-group">
                        <label>New Password</label>
                        <input type="text" />
                    </div>
                    <div className="form-group">
                        <label>Confirm New Password</label>
                        <input type="text" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Change Password" />
                    </div>
                </form>
            </div>
        </div>
    )
  }
})