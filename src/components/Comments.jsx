import React, { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

const Comments = ({ sectionId }) => {
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')
  const [author, setAuthor] = useState('anonymous')
  const [loading, setLoading] = useState(false)

  // Fetch comments for this section
  useEffect(() => {
    fetchComments()
    
    // Subscribe to real-time updates
    const subscription = supabase
      .channel('comments')
      .on('postgres_changes', 
        { 
          event: '*', 
          schema: 'public', 
          table: 'comments',
          filter: `section_id=eq.${sectionId}`
        },
        (payload) => {
          if (payload.eventType === 'INSERT') {
            setComments(prev => [...prev, payload.new])
          }
        }
      )
      .subscribe()

    return () => {
      subscription.unsubscribe()
    }
  }, [sectionId])

  const fetchComments = async () => {
    const { data, error } = await supabase
      .from('comments')
      .select('*')
      .eq('section_id', sectionId)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching comments:', error)
    } else {
      setComments(data || [])
    }
  }

  const addComment = async (e) => {
    e.preventDefault()
    if (!newComment.trim() || !author.trim()) return

    setLoading(true)
    const { data, error } = await supabase
      .from('comments')
      .insert([
        {
          section_id: sectionId,
          content: newComment,
          author: author,
          created_at: new Date().toISOString()
        }
      ])

    if (error) {
      console.error('Error adding comment:', error)
    } else {
      setNewComment('')
      setAuthor('')
    }
    setLoading(false)
  }

  return (
    <div style={{ marginTop: '20px', padding: '20px', borderTop: '1px solid #333' }}>
      <h4>Comments</h4>
      
      {/* Comment Form */}
      <form onSubmit={addComment} style={{ marginBottom: '20px' }}>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            placeholder="Your name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            style={{
              width: '200px',
              padding: '8px',
              marginRight: '10px',
              backgroundColor: '#2a2a2a',
              color: '#e1e1e1',
              border: '1px solid #555',
              borderRadius: '4px'
            }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <textarea
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            style={{
              width: '100%',
              minHeight: '80px',
              padding: '8px',
              backgroundColor: '#2a2a2a',
              color: '#e1e1e1',
              border: '1px solid #555',
              borderRadius: '4px',
              resize: 'vertical'
            }}
          />
        </div>
        <button
          type="submit"
          disabled={loading || !newComment.trim() || !author.trim()}
          style={{
            padding: '8px 16px',
            backgroundColor: '#444',
            color: '#e1e1e1',
            border: '1px solid #666',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          {loading ? 'Adding...' : 'Add Comment'}
        </button>
      </form>

      {/* Comments List */}
      <div>
        {comments.length === 0 ? (
          <p style={{ color: '#888', fontStyle: 'italic' }}>No comments yet. Be the first to comment!</p>
        ) : (
          comments.map((comment) => (
            <div
              key={comment.id}
              style={{
                marginBottom: '15px',
                padding: '15px',
                backgroundColor: '#2a2a2a',
                borderRadius: '8px',
                border: '1px solid #444'
              }}
            >
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: '8px'
              }}>
                <strong style={{ color: '#e1e1e1' }}>{comment.author}</strong>
                <span style={{ color: '#888', fontSize: '0.9em' }}>
                  {new Date(comment.created_at).toLocaleDateString()}
                </span>
              </div>
              <p style={{ 
                color: '#e1e1e1', 
                margin: 0, 
                lineHeight: '1.4',
                textIndent: '0px'
              }}>
                {comment.content}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Comments