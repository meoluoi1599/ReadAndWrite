import mysql.connector
def conn1():
    return mysql.connector.connect(
        host = 'localhost',
        user = 'root',
        password = '1234',
        database = 'project_end_year'
    )
    # dictionary = true: to display name of atribute
    # conn  để kết nối đên db
    # cursor để chạy câu lệnh

from flask_paginate import Pagination
def close_connection(conn, cursor):
    conn.close()
    cursor.close()

class database:
    #login for user
    def login(self, username):
        try:
            query1 = 'select * from tbluser where user_name = %s'
            query2 = 'select * from tblmanager where manager_name = %s'

            conn = conn1()
            cursor = conn.cursor(buffered = True , dictionary = True)
            cursor.execute(query1,username)
            result1 = cursor.fetchone()
            if result1:
               result1.update({'role':'user'})
               return result1
            cursor.execute(query2,username)
            result2 = cursor.fetchone()
            if result2:
               result2.update({'role':'manager'})
               return result2
            close_connection(conn, cursor)
            return None
        except:
            raise Exception
            return 'wrong'
    
    # create account for user
    def signup(self, values):
        try:
            query = 'insert into tbluser(user_name, user_pw, user_email, nick_name) values(%s,%s,%s,%s)'
            query1 = 'select * from tbluser where user_name = %s'
            conn = conn1()
            cursor = conn.cursor(buffered = True, dictionary = True)
            cursor.execute(query1, (values[0],))
            result1 = cursor.fetchall()
            if result1:
                return 0
            else:
                cursor.execute(query,values)
                conn.commit()
                row_affected = cursor.rowcount
            close_connection(conn, cursor)
            return row_affected
        except:
            raise Exception
            return 'wrong'

    def getUser(self):
        try:
            query = 'select * from tbluser'
            conn = conn1()
            cursor = conn.cursor(buffered = True, dictionary = False)
            cursor.execute(query)
            result = cursor.fetchall()
            close_connection(conn, cursor)
            return result
        except:
            raise Exception
            return 'Wrong'
    
    #get author
    def getAuthor(self, user_id):
        try:
            query = 'select * from tbluser where user_id = %s'
            conn = conn1()
            cursor = conn.cursor(buffered = True, dictionary = True)
            cursor.execute(query, user_id)
            result = cursor.fetchone()
            close_connection(conn, cursor)
            return result
        except:
            raise Exception
            return 'Wrong'

    def returnAvatart(self, user_id):
        try:
            query = 'select user_avatar from tbluser where user_id = %s'
            conn = conn1()
            cursor = conn.cursor(buffered = True, dictionary = False)
            cursor.execute(query, user_id)
            result = cursor.fetchone()
            close_connection(conn, cursor)
            return result
        except:
            raise Exception
            return 'Wrong'

    # get list of books\
    def getBooks(self):
        try:
            # query = 'select * from tblstory'
            query = 'select * from tblstory'
            conn = conn1()
            cursor = conn.cursor(buffered = True, dictionary = True)
            cursor.execute(query)
            result = cursor.fetchall()
            close_connection(conn, cursor)
            return result
        except:
            raise Exception
            return 'Wrong'
    
    def return_img(seft, story_id):
        try:
            # query = 'select * from tblstory'
            query = 'select story_img from tblstory where story_id = %s'
            conn = conn1()
            cursor = conn.cursor(buffered = True, dictionary = False)
            cursor.execute(query, story_id)
            result = cursor.fetchone()
            print(result)
            close_connection(conn, cursor)
            return result
        except:
            raise Exception
            return 'Wrong'
    
    # get catagory
    def getCategory(self):
        try:
            query = 'select * from tblcategory'
            conn = conn1()
            cursor = conn.cursor(buffered = True, dictionary = True)
            cursor.execute(query)
            result = cursor.fetchall()
            close_connection(conn, cursor)
            return result
        except:
            raise Exception
            return 'Wrong'
    
    # create story
    def createStory(seft, values):
        try:
            query = 'insert into tblstory(story_title, story_description, story_img, author_id) values(%s, %s, %s, %s)'
            conn = conn1()
            cursor = conn.cursor(buffered = True, dictionary = True)
            cursor.execute(query, values)
            conn.commit()
            row_affected = cursor.rowcount
            close_connection(conn, cursor)
            return row_affected
        except:
            raise Exception
            return 'wrong'

    # get chapter
    def getChapter(self, story_id):
        try:
            query = "select * from tblchapter where story_id = story_id"
            conn = conn1()
            cursor = conn.cursor(buffered = True, dictionary = True)
            cursor.execute(query)
            result = cursor.fetchall()
            close_connection(conn, cursor)
            return result
        except:
            raise Exception
            return 'Wrong'

    def return_chapter(self, chapter_id):
        try:
            query = "select chapter_content from tblchapter where chapter_id = chapter_id"
            conn = conn1()
            cursor = conn.cursor(buffered = True, dictionary=False)
            cursor.execute(query)
            result = cursor.fetchone()
            print(result)
            close_connection(conn, cursor)
            return result
        except:
            raise Exception
            return 'Wrong'

    # create story
    def uploadChapter(seft, values):
        try:
            query = 'insert into tblchapter(chapter_name, chapter_content, story_id, upload_date) values(%s, %s, %s, %s)'
            conn = conn1()
            cursor = conn.cursor(buffered = True, dictionary = True)
            cursor.execute(query, values)
            conn.commit()
            row_affected = cursor.rowcount
            close_connection(conn, cursor)
            return row_affected
        except:
            raise Exception
            return 'wrong'